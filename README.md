## URL-Shortener

### Description

Hi, I have cerated an efficient and user-friendly URL shortener that not only simplifies your links but also provides valuable analytics on their usage. This project is designed to offer a seamless experience for users who need to shorten long URLs and track the performance of their links.

## Features

- Bullet list URL Shortening: Easily convert long, cumbersome URLs into short, manageable links that are easier to share and manage.
- Analytics Dashboard: Gain insights into the performance of your shortened URLs with detailed analytics, including the number of visits, geographic distribution of visitors, and more. (will add later)
- Simple User Interface: Enjoy a straightforward and intuitive interface that makes shortening URLs and accessing analytics a breeze.
- Reliable Performance: Built with efficiency and stability in mind, ensuring fast and reliable URL shortening services.

## How to run project

Clone the project

```bash
  git clone https://github.com/ankur-lakhmara/URL-Shortener-with-Analytics.git
```

Go to the project directory

Install dependencies

```bash
  npm install
```

Create database of name

```bash
  urlShortener
```

Start the server ( Run on localhost)

```bash
  npm run dev
```

Start the server (Run on server)

```bash
  npm start
```

```bash
  Check console for PORT
```

# API Reference

### 1. Short the target URL

```http
  POST /url
```

##### Request JSON

```http
{
    "url":"https://www.youtube.com/watch?v=IhrDJ8Mk-kA"
}

```

##### Response JSON

```http
{
    "url": "http://localhost:8001/url/XOqOWpYQ"
}
```

### 2. Visit the short url

```http
  GET /url/:shortId
  eg. http://localhost:8001/url/Js6MoMdb
```

### 3. Get Analytics of short url

##### Request JSON

```http
  GET /url/analytics/:shortId
  eg. http://localhost:8001/url/analytics/Js6MoMdb
```

##### Response JSON

```http
{
    "totalClicks": 5,
    "analytics": [
        {
            "timestamp": 1706428558118,
            "_id": "65b6088e52e9c3727eb6cb00"
        },
        {
            "timestamp": 1706428580279,
            "_id": "65b608a452e9c3727eb6cb02"
        },
        {
            "timestamp": 1706429168323,
            "_id": "65b60af04603a95d4a74b9bc"
        },
        {
            "timestamp": 1706429174831,
            "_id": "65b60af64603a95d4a74b9c4"
        },
        {
            "timestamp": 1706429180240,
            "_id": "65b60afc4603a95d4a74b9de"
        }
    ]
}
```

## Contributing

We welcome contributions ! If you have ideas for improvements or bug fixes, please feel free to fork the repository and submit a pull request.
