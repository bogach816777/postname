import React from 'react'

const Header = () => {
  return (
    <div className='header'>
    <div className='menu'>
        <button type='button'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M3 7H21M3 12H21M3 17H21" stroke="#080808" stroke-width="1.5" stroke-linecap="round"/>
</svg></button>
        <p className='test-title'>Test Task</p>
        <a href="#" className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M11.8922 0C0.863587 0 0 0.863587 0 11.8922V12.1078C0 23.1364 0.863587 24 11.8922 24H12.1078C23.1364 24 24 23.1364 24 12.1078V12C24 0.8712 23.1288 0 12 0H11.8922ZM9.6 2.4H14.4C21.0774 2.4 21.6 2.9226 21.6 9.6V14.4C21.6 21.0774 21.0774 21.6 14.4 21.6H9.6C2.9226 21.6 2.4 21.0774 2.4 14.4V9.6C2.4 2.9226 2.9226 2.4 9.6 2.4ZM17.9965 4.8C17.3335 4.8018 16.7982 5.34052 16.8 6.00352C16.8018 6.66652 17.3405 7.2018 18.0035 7.2C18.6665 7.1982 19.2018 6.65948 19.2 5.99648C19.1982 5.33348 18.6595 4.7982 17.9965 4.8ZM11.9859 6C8.67274 6.0078 5.9922 8.70086 6 12.0141C6.0078 15.3273 8.70086 18.0078 12.0141 18C15.3273 17.9922 18.0078 15.2991 18 11.9859C17.9922 8.67274 15.2991 5.9922 11.9859 6ZM11.9918 8.4C13.9796 8.3952 15.5952 10.004 15.6 11.9918C15.6042 13.9796 13.996 15.5952 12.0082 15.6C10.0204 15.6048 8.4048 13.9966 8.4 12.0082C8.3952 10.0204 10.004 8.4048 11.9918 8.4Z" fill="#080808"/>
</svg></a>
    </div>
    </div>
  )
}

export default Header
