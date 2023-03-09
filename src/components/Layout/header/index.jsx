import React from 'react'
import { Layout } from 'antd'
import { useNavigate } from 'react-router-dom';
import onLogo from '../../../assets/img/hanbao.png'
import offLogo from '../../../assets/img/shutiao.png'
const { Header } = Layout

export default function Headers() {
  const isCollapsed = false
  const navigate = useNavigate();
  const RedierctToHome = () => {
    console.log(navigate)
  }
  const UpdateLogo = () => {
    return (
      <img
        style={{ cursor: 'pointer' }}
        src={isCollapsed ? onLogo : offLogo}
        onClick={() => RedierctToHome()}
        height="35"
        alt=""
      />
    )
  }

  const headerStyle = {
    // background: '#00377A',
    background: '#fff',
    padding: '0 22px',
    height: '48px',
    display: 'flex',
    alignItems: 'center'
  }
  return (
    <Header style={headerStyle}>
      {UpdateLogo()}
    </Header>
  )
}
