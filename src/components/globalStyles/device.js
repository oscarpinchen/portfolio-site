const size = {
  extraSmallDevice: '575px',
  smallDevice: '576px',
  mediumDevice: '768px',
  largeDevice: '992px',
  extraLargeDevice: '1200px'
}

export const device = {
  extraSmallDevice: `(max-width: ${size.extraSmallDevice})`,
  smallDevice: `(min-width: ${size.smallDevice})`,
  mediumDevice: `(min-width: ${size.mediumDevice})`,
  largeDevice: `(min-width: ${size.largeDevice})`,
  extraLargeDevice: `(min-width: ${size.extraLargeDevice})`,
};
