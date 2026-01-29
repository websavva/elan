export const useAppointmentUrl = () => {
  const { t } = useI18n();
  const message = computed(() =>
    encodeURIComponent(t('bookingMessage')),
  );

  return computed(
    () => `https://wa.me/41782160386?text=${message.value}`,
  );
};
