import React from 'react';

function FavePayIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height = 24, width = 24, className, ...otherProps } = props;

  return (
    <svg
      height={height}
      width={width}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 6.6c0-.865-.701-1.566-1.566-1.566H4.584A1.566 1.566 0 0 0 3 6.6v.81c.007.692.34 1.34.9 1.746V17.4c0 .865.701 1.566 1.566 1.566h.9a1.071 1.071 0 0 0 1.062-1.07v-4.59c0-.26.21-.469.468-.469h3.096c.258 0 .468.21.468.468v4.59c0 .592.48 1.071 1.071 1.071h5.985A1.566 1.566 0 0 0 20.1 17.4V9.156c.56-.407.893-1.054.9-1.746V6.6Zm-2.025 10.8a.46.46 0 0 1-.468.46h-5.958v-4.555c0-.865-.701-1.566-1.566-1.566H7.887c-.865 0-1.566.701-1.566 1.566v4.554h-.828a.46.46 0 0 1-.468-.459V9.696c.294.078.596.118.9.117a3.303 3.303 0 0 0 1.899-.567.243.243 0 0 1 .279 0c.56.38 1.223.577 1.899.567a3.339 3.339 0 0 0 1.872-.513.216.216 0 0 1 .252 0 3.339 3.339 0 0 0 1.854.54 3.303 3.303 0 0 0 1.899-.567.243.243 0 0 1 .279 0 3.33 3.33 0 0 0 1.899.567c.304 0 .606-.039.9-.117l.018 7.677Zm-2.169-9.054c.375.25.818.38 1.269.37h-.018c.402-.003.797-.111 1.143-.316.39-.183.65-.56.684-.99V6.6a.468.468 0 0 0-.468-.468H4.62a.468.468 0 0 0-.468.468v.81c.026.421.273.798.648.99a2.196 2.196 0 0 0 2.412-.018 1.341 1.341 0 0 1 1.539 0c.375.25.818.38 1.269.37.44.005.87-.117 1.242-.352a1.305 1.305 0 0 1 1.476 0c.38.225.818.335 1.26.315.45.01.894-.118 1.269-.369a1.341 1.341 0 0 1 1.539 0Z"
      />
    </svg>
  );
}

export default FavePayIcon;