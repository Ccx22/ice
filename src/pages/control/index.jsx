import React, { Component } from 'react'
import style from './index.module.scss'
import {Button} from 'antd'
export default class index extends Component {
  render() {
    return (
      <div className={style.wrap}>
        <Button type="primary">按钮</Button>
      </div>
    )
  }
}
