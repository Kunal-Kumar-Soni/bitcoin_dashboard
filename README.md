# Live Crypto Price Dashboard

This is a simple React Context for a Crypto Dashboard.  
It gives Bitcoin, Ethereum, Dogecoin prices, 24h change, and Bitcoin 6-hour history for charts.

---

## Features

1. Current Prices and 24h Change

- Shows Bitcoin, Ethereum, Dogecoin prices
- Shows 24-hour percentage change

2. Bitcoin 6-hour History

- Only Bitcoin chart
- 1-hour gap between points
- Latest price included

3. Live Update

- Data refreshes every 30 seconds

4. Clean Prices

- Prices are integers
- Easy to show in chart or cards

---

## How It Works

1. Fetch Current Prices

- Get Bitcoin, Ethereum, Dogecoin prices from API
- Include 24h change

2. Fetch Bitcoin History

- Get Bitcoin price history for last 6 hours
- Pick points every 1 hour
- Add latest price to show current value

3. Auto Refresh

- Update both current prices and Bitcoin history every 30 seconds
- Keeps chart and cards up-to-date

---

## Usage

- Use the context in any component
- Show prices in cards
- Show Bitcoin chart using history data

---

## Notes

- Prices are integers for simplicity
- Bitcoin chart shows 1-hour interval points plus latest price
- Easy to understand and use for beginners
- Can extend for more coins if needed
