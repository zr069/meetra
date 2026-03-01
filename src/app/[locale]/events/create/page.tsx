'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/routing';
import { createClient } from '@/lib/supabase/client';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Link } from '@/i18n/routing';

const categories = [
  'party', 'concert', 'sport', 'meetup', 'culture',
  'food', 'outdoor', 'networking', 'workshop', 'other'
];

const cities = [
  'Tehran', 'Mashhad', 'Isfahan', 'Shiraz', 'Tabriz', 'Karaj',
  'Los Angeles', 'London', 'Toronto', 'Sydney', 'Berlin', 'Dubai'
];

export default function CreateEventPage() {
  const t = useTranslations('events');
  const tCommon = useTranslations('common');
  const router = useRouter();
  const supabase = createClient();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    city: '',
    address: '',
    date: '',
    time: '',
    maxParticipants: '',
    isPublic: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      setError('You must be logged in to create an event');
      setIsLoading(false);
      return;
    }

    const eventDate = new Date(`${formData.date}T${formData.time}`);

    const { data, error: insertError } = await supabase
      .from('events')
      .insert({
        creator_id: user.id,
        title: formData.title,
        description: formData.description || null,
        category: formData.category,
        city: formData.city,
        address: formData.address || null,
        event_date: eventDate.toISOString(),
        max_participants: formData.maxParticipants ? parseInt(formData.maxParticipants) : null,
        is_public: formData.isPublic,
      })
      .select()
      .single();

    if (insertError) {
      setError(insertError.message);
      setIsLoading(false);
      return;
    }

    router.push(`/events/${data.id}`);
  };

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link href="/events" className="p-2 rounded-lg hover:bg-[var(--surface)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">{t('create')}</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-3 rounded-lg bg-[var(--error)]/10 text-[var(--error)] text-sm">
              {error}
            </div>
          )}

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
              {t('form.uploadImage')}
            </label>
            <div className="border-2 border-dashed border-[var(--border)] rounded-xl p-8 text-center hover:border-[var(--primary)] transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto text-[var(--text-secondary)] mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <p className="text-[var(--text-secondary)] text-sm">Click to upload</p>
            </div>
          </div>

          {/* Title */}
          <Input
            label={t('form.title')}
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            required
          />

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
              {t('form.description')}
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={4}
              className="input w-full rounded-lg border border-[var(--border)] bg-white px-4 py-2.5 resize-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
              {t('form.category')}
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
              required
              className="input w-full rounded-lg border border-[var(--border)] bg-white px-4 py-2.5"
            >
              <option value="">Select category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{t(`categories.${cat}`)}</option>
              ))}
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
              {t('form.location')}
            </label>
            <select
              value={formData.city}
              onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
              required
              className="input w-full rounded-lg border border-[var(--border)] bg-white px-4 py-2.5"
            >
              <option value="">Select city</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Address */}
          <Input
            label="Address (optional)"
            value={formData.address}
            onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
            placeholder="e.g., Valiasr Street, Coffee Shop Name"
          />

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="date"
              label={t('form.date')}
              value={formData.date}
              onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
              required
              min={new Date().toISOString().split('T')[0]}
            />
            <Input
              type="time"
              label="Time"
              value={formData.time}
              onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
              required
            />
          </div>

          {/* Max Participants */}
          <Input
            type="number"
            label={t('form.maxParticipants')}
            value={formData.maxParticipants}
            onChange={(e) => setFormData(prev => ({ ...prev, maxParticipants: e.target.value }))}
            placeholder="Leave empty for unlimited"
            min="2"
          />

          {/* Public Toggle */}
          <div className="flex items-center justify-between p-4 bg-[var(--surface)] rounded-lg">
            <div>
              <p className="font-medium text-[var(--text-primary)]">{t('form.isPublic')}</p>
              <p className="text-sm text-[var(--text-secondary)]">Anyone can see and join this event</p>
            </div>
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, isPublic: !prev.isPublic }))}
              className={`w-12 h-6 rounded-full transition-colors ${
                formData.isPublic ? 'bg-[var(--primary)]' : 'bg-[var(--border)]'
              }`}
            >
              <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${
                formData.isPublic ? 'translate-x-6' : 'translate-x-0.5'
              }`} />
            </button>
          </div>

          {/* Submit */}
          <Button type="submit" fullWidth isLoading={isLoading}>
            {t('create')}
          </Button>
        </form>
      </div>
    </AppLayout>
  );
}
