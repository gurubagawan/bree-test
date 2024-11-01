This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Run Development server with: 

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


Most of my design decisions were based around simplicity. When it comes to finances I feel that its best to keep it simple and just have the information presented to you as cleanly as possible. I used Tailwind for CSS because its extremely versatile. It allowed me to focus less time on CSS and more on the actual implementation which I thought was more important. 

At first I had the app display a static balance. But then I thought all the information is there for me, so why keep it that why? In a real life scenario this number would be dyanmic, so that's what I did. This required me to operate on the assumption that the account would start with $0 and all of the transactions are present- but the amount presented is the balance of all the transactions. After this was done, I realized it wasn't hard to simply use what I'd built to also show pending transactions. I essentially used my TRANSACTION const as a mock DB so if you play around with this you can see the balance updating. 

If I had more time, the things I would have dedicated it to are: 

-  Better code structure. I didn't focus on this too much as I felt that a clean UI and functionality were more important, but in a production environment I definitley would not put everything in my consts file but rather make a different file for each (IE a types file, a functions file, ETC). 

- Adding a sort method for transactions to change the order in which they are displayed 

- Building unit tests which I intended to but I ran out of time. 