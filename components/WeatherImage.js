import Image from 'next/image';

export default function WeatherImage({ weatherStatus }) {
  const height = 120;
  const width = 120;
  let weatherTypeSource = '';

  switch (weatherStatus) {
    case 'CloudySunny':
      weatherTypeSource = '/images/cloudy.png';
      break;
    case 'Cloudy':
      weatherTypeSource = '/images/cloud.png';
      break;
    case 'Fog':
      weatherTypeSource = '/images/fog.png';
      break;
    case 'Drizzle':
      weatherTypeSource = '/images/drizzle.png';
      break;
    case 'Raining':
      weatherTypeSource = '/images/rainy.png';
      break;
    case 'Sunny':
      weatherTypeSource = '/images/sun.png';
      break;
    case 'Windy':
      weatherTypeSource = '/images/windy.png';
      break;
    case 'Night':
      weatherTypeSource = '/images/night.png';
      break;
    default:
      weatherTypeSource = '/images/sun.png';
      break;
  }

  return (
    <div className="text-center">
      <Image
        src={weatherTypeSource}
        height={height}
        width={width}
        alt={weatherStatus}
        objectFit="cover"
      />
    </div>
  );

  // switch (weatherStatus) {
  //   case 'CloudySunny':
  //     return (
  //       <div className="w-full overflow-hidden relative">
  //         <Image
  //           src="/images/cloudy.png"
  //           height={height}
  //           width={width}
  //           alt={weatherStatus}
  //           objectFit="cover"
  //           className={classNames}
  //         />
  //       </div>
  //     );
  //   case 'Cloudy':
  //     return (
  //       <div>

  //       </div>
  //       <Image
  //         src="/images/cloud.png"
  //         height={height}
  //         width={width}
  //         alt={weatherStatus}
  //         className={classNames}
  //       />
  //     );
  //   case 'Fog':
  //     return (
  //       <Image
  //         src="/images/fog.png"
  //         height={height}
  //         width={width}
  //         alt={weatherStatus}
  //         className={classNames}
  //       />
  //     );
  //   case 'Drizzle':
  //     return (
  //       <Image
  //         src="/images/drizzle.png"
  //         height={height}
  //         width={width}
  //         alt={weatherStatus}
  //         className={classNames}
  //       />
  //     );
  //   case 'Raining':
  //     return (
  //       <Image
  //         src="/images/rainy.png"
  //         height={height}
  //         width={width}
  //         alt={weatherStatus}
  //         className={classNames}
  //       />
  //     );
  //   case 'Sunny':
  //     return (
  //       <Image
  //         src="/images/sun.png"
  //         height={height}
  //         width={width}
  //         alt={weatherStatus}
  //         className={classNames}
  //       />
  //     );
  //   case 'Windy':
  //     return (
  //       <Image
  //         src="/images/windy.png"
  //         height={height}
  //         width={width}
  //         alt={weatherStatus}
  //         className={classNames}
  //       />
  //     );
  //   case 'Night':
  //     return (
  //       <Image
  //         src="/images/night.png"
  //         height={height}
  //         width={width}
  //         alt={weatherStatus}
  //         className={classNames}
  //       />
  //     );
  //   default:
  //     return (
  //       <Image
  //         src="/images/sun.png"
  //         height={height}
  //         width={width}
  //         alt={weatherStatus}
  //         className={classNames}
  //       />
  //     );
  // }
}
