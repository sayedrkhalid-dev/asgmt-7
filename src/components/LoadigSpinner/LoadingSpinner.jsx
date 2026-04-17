import { Button, Spinner } from "flowbite-react";

export const LoadingSpinner = () => {
  return (
    <Button color="alternative">
      <Spinner aria-label="Alternate spinner button example" size="sm" />
      <span className="py-2 pl-3">Loading...</span>
    </Button>
  );
};

export default LoadingSpinner;
