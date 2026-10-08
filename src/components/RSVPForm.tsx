import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Loader2, Heart } from 'lucide-react';
import { toast } from 'sonner';

interface RSVPFormProps {
  inviteeName?: string;
  eventName?: string;
  eventParam?: string;
}

export const RSVPForm: React.FC<RSVPFormProps> = ({ inviteeName = '', eventName = 'the celebration', eventParam = 'both' }) => {
  const searchParams = new URLSearchParams(window.location.search);
  const guestsParam = searchParams.get('guests') || '1';

  const [formData, setFormData] = useState({
    fullName: inviteeName,
    attendance: 'yes',
    guests: guestsParam,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const scriptUrl = "https://script.google.com/macros/s/AKfycbxyOLqbPCF84tUg299jIyA0GuebtYFra-3C-CXxzE851QIQkOs1RRrqBKyYqP6NCSO-/exec";

  useEffect(() => {
    if (inviteeName) {
      setFormData(prev => ({ ...prev, fullName: inviteeName }));
    }
  }, [inviteeName]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const payload = new FormData();
      payload.append('sheet', 'RSVP');
      payload.append('fullName', formData.fullName);
      payload.append('attendance', formData.attendance);
      payload.append('guests', formData.attendance === 'yes' ? formData.guests : '0'); 
      payload.append('thoughts', ''); 
      payload.append('dietaryNotes', ''); 

      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: payload,
      });

      setStatus('success');
      toast.success('Your RSVP has been warmly received!');
    } catch (error) {
      console.error('Error sending RSVP: ', error);
      setStatus('error');
      toast.error('Could not submit RSVP. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 relative py-12 sm:py-20 flex flex-col items-center">
      
      {/* Pearl Garland SVG - Creative Touch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] sm:w-[120vw] max-w-none pointer-events-none select-none z-0 opacity-60">
        <svg viewBox="0 0 1774 887" aria-hidden="true" focusable="false" className="w-full h-auto">
          <image href="/pearl-garland-2-base.png" xlinkHref="/pearl-garland-2-base.png" x="0" y="0" width="1774" height="887" />
          <g transform="translate(127 239)">
            <g>
              <animateTransform attributeName="transform" type="skewX" values="0;2.6;0;-2.6;0" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1" dur="4.6s" begin="-0.4s" repeatCount="indefinite"></animateTransform>
              <image href="/pearl-garland-2-strand-0.png" xlinkHref="/pearl-garland-2-strand-0.png" x="-114" y="0" width="228" height="630" />
            </g>
          </g>
          <g transform="translate(543 239)">
            <g>
              <animateTransform attributeName="transform" type="skewX" values="0;2.6;0;-2.6;0" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1" dur="4.2s" begin="-2.1s" repeatCount="indefinite"></animateTransform>
              <image href="/pearl-garland-2-strand-0.png" xlinkHref="/pearl-garland-2-strand-0.png" x="-103" y="0" width="206" height="473" />
            </g>
          </g>
          <g transform="translate(887 239)">
            <g>
              <animateTransform attributeName="transform" type="skewX" values="0;2.6;0;-2.6;0" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1" dur="5s" begin="-3.6s" repeatCount="indefinite"></animateTransform>
              <image href="/pearl-garland-2-strand-0.png" xlinkHref="/pearl-garland-2-strand-0.png" x="-93" y="0" width="186" height="318" />
            </g>
          </g>
          <g transform="translate(1231 239)">
            <g>
              <animateTransform attributeName="transform" type="skewX" values="0;2.6;0;-2.6;0" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1" dur="4.4s" begin="-1.3s" repeatCount="indefinite"></animateTransform>
              <image href="/pearl-garland-2-strand-0.png" xlinkHref="/pearl-garland-2-strand-0.png" x="-103" y="0" width="206" height="472" />
            </g>
          </g>
          <g transform="translate(1647.5 239)">
            <g>
              <animateTransform attributeName="transform" type="skewX" values="0;2.6;0;-2.6;0" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1" dur="4.8s" begin="-2.9s" repeatCount="indefinite"></animateTransform>
              <image href="/pearl-garland-2-strand-0.png" xlinkHref="/pearl-garland-2-strand-0.png" x="-113.5" y="0" width="227" height="630" />
            </g>
          </g>
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-lg bg-[#FDFBF7]/95 backdrop-blur-xl p-10 sm:p-14 rounded-t-[10rem] border-x-[1.5px] border-t-[1.5px] border-[#ea6a29]/30 shadow-2xl text-center mt-20"
      >
        {/* Lace decoration inside */}
        <div className="absolute inset-0 border border-[#ea6a29]/15 rounded-t-[10rem] m-2 pointer-events-none" />

        <div className="inline-flex items-center justify-center gap-3 mb-6 relative z-10">
          <div className="w-8 h-[1px] bg-[#ea6a29]/40" />
          <span className="text-[#ea6a29] uppercase tracking-[0.4em] text-[10px] sm:text-[11px] font-bold">
            Kindly Respond
          </span>
          <div className="w-8 h-[1px] bg-[#ea6a29]/40" />
        </div>

        <h2 className="text-5xl sm:text-6xl font-['Cormorant_Garamond',_serif] text-[#ea6a29] leading-none mb-4 relative z-10">
          RSVP
        </h2>

        <p className="text-[#ea6a29]/70 font-sans text-sm sm:text-base leading-relaxed mb-10 relative z-10">
          {inviteeName
            ? `Dear ${inviteeName}, please let us know if you will join us.`
            : `Please let us know if you will join our celebration.`
          }
        </p>

        <div className="relative z-10">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-8"
              >
                <div className="w-16 h-16 bg-[#ea6a29]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-[#ea6a29]" />
                </div>
                <h3 className="text-3xl font-['Cormorant_Garamond',_serif] text-[#ea6a29] mb-3">Thank You</h3>
                <p className="text-[#ea6a29]/70 font-sans text-sm mb-8">
                  Your response has been warmly received.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2 rounded-full border border-[#ea6a29]/30 text-[#ea6a29] font-sans text-[10px] tracking-[0.2em] uppercase hover:bg-[#ea6a29]/10 transition-all duration-300"
                >
                  Update Response
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div>
                  <input
                    required
                    type="text"
                    placeholder="Your Full Name"
                    className="w-full bg-transparent border-b border-[#ea6a29]/30 pb-3 outline-none transition-all duration-300 font-['Cormorant_Garamond',_serif] text-2xl text-center text-[#ea6a29] placeholder:text-[#ea6a29]/40 focus:border-[#ea6a29]"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.3em] text-[#ea6a29]/70 mb-4 font-semibold">Will you attend?</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: 'yes' })}
                      className={`flex-1 py-3.5 rounded-full border transition-all duration-300 font-sans text-xs tracking-[0.15em] uppercase flex items-center justify-center gap-2 ${
                        formData.attendance === 'yes'
                          ? 'bg-[#ea6a29] border-[#ea6a29] text-[#FDFBF7] shadow-md'
                          : 'bg-transparent border-[#ea6a29]/30 text-[#ea6a29]/70 hover:border-[#ea6a29]/60 hover:bg-[#ea6a29]/5'
                      }`}
                    >
                      {formData.attendance === 'yes' && <Heart className="w-3.5 h-3.5 fill-current" />}
                      Joyfully Accept
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: 'no' })}
                      className={`flex-1 py-3.5 rounded-full border transition-all duration-300 font-sans text-xs tracking-[0.15em] uppercase ${
                        formData.attendance === 'no'
                          ? 'bg-[#ea6a29] border-[#ea6a29] text-[#FDFBF7] shadow-md'
                          : 'bg-transparent border-[#ea6a29]/30 text-[#ea6a29]/70 hover:border-[#ea6a29]/60 hover:bg-[#ea6a29]/5'
                      }`}
                    >
                      Regretfully Decline
                    </button>
                  </div>
                </div>

                <AnimatePresence>
                  {formData.attendance === 'yes' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <label className="block text-[10px] uppercase tracking-[0.3em] text-[#ea6a29]/70 mb-3 mt-4 font-semibold">Number of Guests</label>
                      <input
                        type="number"
                        min="1"
                        className="w-24 mx-auto bg-transparent border-b border-[#ea6a29]/30 pb-2 outline-none transition-all duration-300 font-['Cormorant_Garamond',_serif] text-3xl text-center text-[#ea6a29] focus:border-[#ea6a29]"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="pt-6">
                  <button
                    disabled={status === 'loading'}
                    type="submit"
                    className="w-full bg-[#ea6a29] text-[#FDFBF7] py-5 rounded-full font-sans tracking-[0.3em] font-bold text-[11px] uppercase hover:bg-[#d65f24] transition-all duration-300 shadow-xl active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      'Send RSVP'
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
