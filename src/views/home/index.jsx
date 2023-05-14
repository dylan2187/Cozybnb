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
