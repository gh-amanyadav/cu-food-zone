// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([{
    "name": "Aman Dhaba",
    "location":"Gharuan",
    "url":"www.google.com"
  },
  {
    "name": "Chandigarh Dhaba",
    "location": "Mohali",
    "url": "www.yahoo.in"
  },
  {
    "name": "Chandigarh Dhaba",
    "location": "Mohali",
    "url": "www.yahoo.in"
  }
  ,{
    "name": "Chandigarh Dhaba",
    "location": "Mohali",
    "url": "www.yahoo.in"
  }
])
}
