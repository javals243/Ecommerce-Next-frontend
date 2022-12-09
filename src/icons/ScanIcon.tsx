import React from 'react';

function ScanIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height = 24, width = 24, className, ...otherProps } = props;

  return (
    <svg
      height={height}
      width={width}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path d="M3.802 7.128A3.329 3.329 0 0 1 7.12 3.802h2.444a.885.885 0 1 1 0 1.77H7.119c-.848 0-1.546.702-1.546 1.556v.745a.885.885 0 1 1-1.77 0v-.745ZM13.552 4.687c0-.489.396-.885.886-.885h2.443a3.323 3.323 0 0 1 3.317 3.329v.784a.885.885 0 0 1-1.77 0v-.784c0-.86-.692-1.558-1.547-1.558h-2.444a.885.885 0 0 1-.885-.886ZM2.583 12c0-.49.397-.886.886-.886H20.53a.885.885 0 1 1 0 1.771H3.47A.885.885 0 0 1 2.583 12ZM18.427 16.062a.885.885 0 1 1 1.771 0v.817a3.325 3.325 0 0 1-3.317 3.319h-2.444a.885.885 0 1 1 0-1.771h2.444c.848 0 1.546-.698 1.546-1.548v-.817ZM3.802 16.124a.885.885 0 1 1 1.771 0v.746c0 .859.69 1.557 1.546 1.557h2.444a.885.885 0 1 1 0 1.77H7.119a3.322 3.322 0 0 1-3.317-3.327v-.746Z" />
    </svg>
  );
}

export default ScanIcon;
