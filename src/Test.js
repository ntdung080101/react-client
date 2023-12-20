import React from 'react'

const arr = [
    {
        "name": "Juri Kalita",
        "mobile": "2345289873",
        "email": "juri123@gmail.com",
        "password": "juri123",
        "pic": "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-3.jpg",
        "id": 3
      },
      {
        "name": "Tanmoy Roy",
        "mobile": "9093141115",
        "email": "tanmoy123@gmail.com",
        "password": "tanmoy123",
        "pic": "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-3.jpg",
        "id": 4
      },
      {
        "name": "Deepak Yadav",
        "mobile": "4152896354",
        "email": "deepak123@gmail.com",
        "password": "deepak123",
        "pic": "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-3.jpg",
        "id": 5
      }
]

const Test = () => {

    for(let e of arr){
        console.log(e)
    }

  return (
    <div>Test</div>
  )
}

export default Test