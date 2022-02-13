import Image from 'next/image';

export default function WeatherImage({ weatherStatus }) {
  const height = 120;
  const width = 120;
  switch (weatherStatus) {
    case 'CloudySunny':
      return (
        <Image
          src="/images/cloudy.png"
          height={height}
          width={width}
          alt={weatherStatus}
        />
      );
    case 'Cloudy':
      return (
        <Image
          src="/images/cloud.png"
          height={height}
          width={width}
          alt={weatherStatus}
        />
      );
    case 'Fog':
      return (
        <Image
          src="/images/fog.png"
          height={height}
          width={width}
          alt={weatherStatus}
        />
      );
    case 'Drizzle':
      return (
        <Image
          src="/images/drizzle.png"
          height={height}
          width={width}
          alt={weatherStatus}
        />
      );
    case 'Raining':
      return (
        <Image
          src="/images/rainy.png"
          height={height}
          width={width}
          alt={weatherStatus}
        />
      );
    case 'Sunny':
      return (
        <Image
          src="/images/sun.png"
          height={height}
          width={width}
          alt={weatherStatus}
        />
      );
    case 'Windy':
      return (
        <Image
          src="/images/windy.png"
          height={height}
          width={width}
          alt={weatherStatus}
        />
      );
    case 'Night':
      return (
        <Image
          src="/images/night.png"
          height={height}
          width={width}
          alt={weatherStatus}
        />
      );
    default:
      return (
        <Image
          src="/images/sun.png"
          height={height}
          width={width}
          alt={weatherStatus}
        />
      );
  }
}
