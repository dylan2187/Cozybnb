/*
 * @Date: 2023-05-15 18:27:13
 * @LastEditors: kai && neodylan@foxmail.com
 * @LastEditTime: 2023-05-15 18:27:28
 * @FilePath: /airbnb/src/views/home/index copy.jsx
 * 用于测试网络请求的封装， 通过可选链实现了条件渲染
 */
import React, { memo, useEffect, useState } from 'react'
import request from '@/services'

const Home = memo(() => {
  const [highScore, setHighScore] = useState([])
  useEffect(() => {
    request.get({ url: '/home/highscore' }).then((res) => {
      console.log('请求得到的数据： ', res)
      setHighScore(res)
    })
  }, [])
  console.log(highScore)
  return (
    <div>
      <h1>home</h1>
      <h2>{highScore.title}</h2>
      <h4>{highScore.subtitle}</h4>
      {highScore.list && (
        <ul>
          {highScore.list.map((item, index) => {
            return <li key={item.id}>{item.name}</li>
          })}
        </ul>
      )}
      {/* 可选链实现条件渲染 */}
      <ul>
        {highScore?.list?.map((item, index) => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  )
})

export default Home
