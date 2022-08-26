import IconsSVG from '../../assets/icons/sprite.svg';

export default function Icons({ name, color, width, height, className }) {
  return (
    <svg
      className={`icon icon-${name} ${className}`}
      fill={color}
      stroke={color}
      width={width}
      height={height}
    >
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  );
}