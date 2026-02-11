import { type FormEvent, useEffect, useMemo, useState } from 'react';
import { Send, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppWidget.css';

const INITIAL_FORM = {
  name: '',
  occasion: 'Wedding',
  requirement: '',
};

// Update this constant if the business WhatsApp number changes.
// Stored without symbols; include country code for reliability (e.g., +91 -> 91).
const BUSINESS_PHONE = '919970896765';

// Optional: point to a PHP endpoint that generates the WhatsApp URL server-side.
// Keep false to use pure frontend click-to-chat.
const USE_BACKEND = false;
const BACKEND_ENDPOINT = '/server/wa-redirect.php';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formValues, setFormValues] = useState(INITIAL_FORM);
  const [showError, setShowError] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(true);

  // Cycle tooltip visibility: 3s ON -> 5s OFF
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isTooltipVisible) {
      // If currently visible, hide after 3 seconds
      timer = setTimeout(() => setIsTooltipVisible(false), 3000);
    } else {
      // If currently hidden, show after 5 seconds
      timer = setTimeout(() => setIsTooltipVisible(true), 5000);
    }
    return () => clearTimeout(timer);
  }, [isTooltipVisible]);

  const isMobileDevice = useMemo(() => {
    if (typeof navigator === 'undefined') {
      return false;
    }
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|BlackBerry/i.test(navigator.userAgent);
  }, []);

  const togglePanel = () => setIsOpen((prev) => !prev);
  const closePanel = () => setIsOpen(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const buildMessage = () => {
    const lines = [
      'Hello,',
      'I visited your website and want to enquire about catering services.',
      '',
      `Name: ${formValues.name.trim()}`,
      `Occasion: ${formValues.occasion.trim()}`,
      `Requirement: ${formValues.requirement.trim()}`,
      '',
      'Please share details.',
    ];
    return encodeURIComponent(lines.join('\n'));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const hasEmptyField = Object.values(formValues).some((value) => !value.trim());
    if (hasEmptyField) {
      setShowError(true);
      return;
    }

    setShowError(false);
    const message = buildMessage();
    if (USE_BACKEND) {
      const formEl = document.createElement('form');
      formEl.method = 'POST';
      formEl.action = BACKEND_ENDPOINT;
      formEl.target = '_blank';

      const payload: Record<string, string> = {
        name: formValues.name,
        occasion: formValues.occasion,
        requirement: formValues.requirement,
      };

      Object.entries(payload).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        formEl.appendChild(input);
      });

      document.body.appendChild(formEl);
      formEl.submit();
      formEl.remove();
    } else {
      const baseUrl = isMobileDevice ? 'whatsapp://send' : 'https://web.whatsapp.com/send';
      const whatsappUrl = `${baseUrl}?phone=${BUSINESS_PHONE}&text=${message}`;
      window.open(whatsappUrl, '_blank');
    }

    setFormValues(INITIAL_FORM);
    setIsOpen(false);
  };

  return (
    <div className="wa-widget" aria-live="polite">
      <div
        className={`wa-tooltip ${!isOpen && isTooltipVisible ? 'wa-tooltip--visible' : ''}`}
        onClick={togglePanel}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && togglePanel()}
      >
        Chat with us on WhatsApp
      </div>

      <div className={`wa-panel ${isOpen ? 'wa-panel--open' : ''}`} aria-hidden={!isOpen}>
        <div className="wa-panel__header">
          <div>
            <p className="wa-panel__eyebrow">Need quick help?</p>
            <h3 className="wa-panel__title">Chat on WhatsApp</h3>
          </div>
          <button type="button" className="wa-panel__close" aria-label="Close chat form" onClick={closePanel}>
            <X size={18} />
          </button>
        </div>
        <form id="wa-form" className="wa-panel__body" onSubmit={handleSubmit}>
          <p className={`wa-panel__error ${showError ? 'wa-panel__error--visible' : ''}`}>
            Please fill in every field before sending your inquiry.
          </p>

          <label className="wa-field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              autoComplete="name"
            />
          </label>

          <label className="wa-field">
            <span>Occasion</span>
            <select name="occasion" value={formValues.occasion} onChange={handleChange}>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Corporate</option>
              <option>Pooja</option>
              <option>Other</option>
            </select>
          </label>

          <label className="wa-field">
            <span>Requirement</span>
            <textarea
              name="requirement"
              value={formValues.requirement}
              onChange={handleChange}
              placeholder="Tell us about your event..."
              rows={3}
            />
          </label>

          <button type="submit" className="wa-submit">
            <Send size={18} />
            Start WhatsApp Chat
          </button>
        </form>
      </div>

      <button
        type="button"
        className="wa-button"
        aria-controls="wa-form"
        aria-expanded={isOpen}
        onClick={togglePanel}
      >
        <FaWhatsapp size={40} />
      </button>
    </div>
  );
};

export default WhatsAppWidget;
