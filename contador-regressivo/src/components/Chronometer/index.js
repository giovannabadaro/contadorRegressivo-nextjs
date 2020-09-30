import { useTimer } from 'react-timer-hook';
 
function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
 
 
  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px', color: "#e5ffff"}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}
 
export default function Chronometer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 2113200); 
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}