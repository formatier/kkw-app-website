export const useReactiveValue = <T, V>(
  value: T,
  updater: (value: T) => V,
  interval?: number,
) => {
  const reactiveValue = ref(updater(value));

  setInterval(() => {
    reactiveValue.value = updater(value);
  }, interval || 500);

  return reactiveValue;
};

export const useTimer = () => {
  const timer = useState("timer", () => 0);
  let timerInstance = ref<number | undefined>(undefined);

  onMounted(() => {
    timerInstance.value = setInterval(() => {
      timer.value = Math.floor(Date.now() / 1000);
    }, 1);
  });

  onUnmounted(() => {
    clearInterval(timerInstance.value);
  });

  return timer;
};
