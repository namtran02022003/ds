 const formatTimeWaveSurfer = (seconds: number | undefined) => {
    if (seconds) {
      return [seconds / 60, seconds % 60]
        .map((v) => `0${Math.floor(v)}`.slice(-2))
        .join(":");
    }
    return "00:00";
};
  export {formatTimeWaveSurfer}