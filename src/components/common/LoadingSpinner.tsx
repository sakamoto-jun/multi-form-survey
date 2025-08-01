const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-bg">
      <div className="w-50 h-50 border-4 border-gray300 border-t-main rounded-full animate-spin" />
    </div>
  );
};

export default LoadingSpinner;
