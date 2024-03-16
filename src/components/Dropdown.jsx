import { useState } from 'react'
import BicolorCircle from './BicolorCircle'
import { THEME } from '../constants'

function Dropdown() {
  const [dropdownVisible, setDropdownVisible] = useState(true)

  return (
    <div
      className="flex flex-col items-center"
      tabIndex={0}
      onBlur={() => setDropdownVisible(false)}
    >
      <BicolorCircle
        from="brand-2"
        to="brand-1"
        onClick={() => setDropdownVisible((prev) => !prev)}
      />
      {dropdownVisible && (
        <ul>
          <DropdownItem value="theme0" />
          <DropdownItem value="theme1" />
          <DropdownItem value="theme2" />
          <DropdownItem value="theme3" />
          <DropdownItem value="theme4" />
          <DropdownItem value="theme5" />
          <DropdownItem value="theme6" />
          <DropdownItem value="theme7" />
          <DropdownItem value="theme8" />
          <DropdownItem value="theme9" />
        </ul>
      )}
    </div>
  )
}

function DropdownItem({ value }) {
  const changeTheme = () => {
    document.body.style.setProperty('--brand-1', THEME[value].brand1)
    document.body.style.setProperty('--brand-2', THEME[value].brand2)
    document.body.style.setProperty('--img-hue-rotate', THEME[value].hueRotate)
  }

  return (
    <BicolorCircle
      from={THEME[value].brand2}
      to={THEME[value].brand1}
      onClick={changeTheme}
    />
  )
}

export default Dropdown
