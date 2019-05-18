import React from 'react'
import { Picture } from './styles'

export const Logo = (props) => (
  <Picture>
    <svg viewBox='72 0 240 90' width={150} {...props}>
      <defs>
        <linearGradient
          id='prefix__a'
          x2={1}
          y1={0.5}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#af00bb' />
          <stop offset={1} stopColor='#ffcd24' />
        </linearGradient>
      </defs>
      <path
        fill='url(#prefix__a)'
        d='M37.25-14.27q.83 0 1.31.77.48.76.48 2.11 0 2.56-1.22 3.97-2.75 3.39-5.92 5.56Q28.74.32 24.7.32q-3.39 0-5.5-2.43Q15.55.26 11.58.32q-.83 12.35-3.77 20.64-2.95 8.29-8.64 8.29-3.46 0-5.12-2.5-1.67-2.49-1.67-6.91 0-6.27 2.88-14.62 2.88-8.36 8.9-18.4 0-9.35-.13-13-.06-1.85 1.47-2.94 1.54-1.09 3.84-1.09 1.35 0 1.96.55.6.54.67 2.14 0 1.6.06 2.37 2.05-2.56 4.03-3.68 1.99-1.12 4.23-1.12 3.58 0 5.85 2.88 2.28 2.88 2.28 7.55 0 3.39-1.09 6.59-1.09 3.2-3.01 5.83 1.34.38 2.24.38 2.11 0 4.03-1.54 1.92-1.53 4.93-5.12.77-.89 1.73-.89zM11.9-5.82q2.31-.52 4.26-2.53 1.95-2.02 3.1-4.99 1.16-2.98 1.16-6.24 0-1.92-.77-2.92-.77-.99-2.05-.99-2.3 0-5.57 4.87-.06 2.81-.06 8.25 0 2.95-.07 4.55zM-.32 22.98q1.73 0 2.88-7.52T4.03-3.26Q1.28 3.14-.32 8.96q-1.6 5.82-1.6 9.79 0 2.05.48 3.14.48 1.09 1.12 1.09zM62.4-14.27q.83 0 1.31.77.48.76.48 2.11 0 2.56-1.21 3.97-2.37 2.88-6.69 5.31Q51.97.32 47.04.32q-6.72 0-10.43-3.65t-3.71-9.98q0-4.42 1.85-8.23 1.86-3.8 5.15-6.04 3.3-2.24 7.46-2.24 3.71 0 5.95 2.2 2.24 2.21 2.24 5.99 0 4.41-3.17 7.58-3.16 3.17-10.72 5.03 1.6 2.94 6.08 2.94 2.88 0 6.56-2.02 3.68-2.01 6.37-5.28.77-.89 1.73-.89zm-16.13-9.28q-2.37 0-4 2.75t-1.63 6.66v.12q3.78-.89 5.95-2.68 2.18-1.8 2.18-4.16 0-1.22-.67-1.96-.68-.73-1.83-.73zm41.28 9.28q.83 0 1.31.77.48.76.48 2.11 0 2.56-1.21 3.97-2.75 3.39-6.02 5.56Q78.85.32 74.62.32q-13.05 0-13.05-18.37 0-2.81.19-5.69h-2.5q-1.92 0-2.59-.71-.67-.7-.67-2.24 0-3.58 2.88-3.58h3.65q1.09-7.04 3.33-12.87 2.24-5.82 5.4-9.28 3.17-3.45 6.82-3.45 2.69 0 4.22 2.37 1.54 2.36 1.54 5.95 0 9.92-8.32 17.28h7.17q1.02 0 1.47.45.45.44.45 1.66 0 4.42-7.23 4.42h-7.81q-.13 3.2-.13 4.99 0 6.65 1.57 9.34 1.57 2.69 4.96 2.69 2.75 0 4.86-1.66 2.11-1.67 4.99-5 .77-.89 1.73-.89zm-11.2-35.46q-.96 0-2.14 2.4-1.19 2.4-2.24 6.66-1.06 4.25-1.76 9.44 3.77-3.27 5.66-7.33 1.89-4.06 1.89-7.39 0-3.78-1.41-3.78zm40.58 35.59q.83 0 1.31.8.48.8.48 2.01 0 1.47-.45 2.31-.45.83-1.41 1.47-5.5 3.71-8.06 5.5L104.7.7q-2.43 13.25-6.36 20.84-3.94 7.58-10.02 7.58-3.26 0-5.31-2.02-2.05-2.01-2.05-5.28 0-4.54 3.58-9.76Q88.13 6.85 97.98-.77l.39-2.49q-1.09 1.72-2.85 2.65-1.76.93-3.49.93-3.97 0-6.33-2.88-2.37-2.88-2.37-7.55 0-5.12 2.37-9.7 2.36-4.57 6.3-7.36 3.94-2.78 8.35-2.78 1.41 0 1.89.54.48.55.8 1.95 1.22-.25 2.82-.25 1.6 0 2.27.48.67.48.67 1.89 0 .76-.06 1.21-.26 1.99-1.6 10.05-.26 1.54-.55 3.36-.29 1.82-.61 3.87 4.93-3.84 9.48-6.78.83-.51 1.47-.51zm-22.59 8q1.47 0 2.81-1.8 1.35-1.79 1.92-5.12L101.12-24q-2.62.06-4.86 2.02-2.24 1.95-3.59 5.15-1.34 3.2-1.34 6.78 0 1.99.8 2.95.8.96 2.21.96zm-5.32 29.05q1.6 0 3.62-3.84t3.87-12.22q-4.93 4.22-7.1 7.61-2.18 3.4-2.18 5.96 0 1.08.42 1.79.41.7 1.37.7zM119.36.32q-2.43 0-3.42-2.56-1-2.56-1-8.19 0-8.32 2.37-15.81.58-1.86 1.89-2.72 1.31-.86 3.68-.86 1.28 0 1.79.32t.51 1.21q0 1.03-.96 4.61-.64 2.56-1.02 4.48-.38 1.92-.64 4.74 2.11-5.51 4.74-8.96 2.62-3.46 5.15-4.93 2.53-1.47 4.64-1.47 4.16 0 4.16 4.16 0 .83-.58 4.03-.51 2.56-.51 3.2 0 2.24 1.6 2.24 1.79 0 4.61-2.82.83-.83 1.73-.83.83 0 1.31.74.48.73.48 1.95 0 2.37-1.28 3.71-1.79 1.86-4.19 3.17-2.4 1.31-5.09 1.31-3.39 0-5.15-1.73-1.76-1.73-1.76-4.67 0-.96.19-1.92.13-1.28.13-1.73 0-1.02-.71-1.02-.96 0-2.53 2.14-1.56 2.15-3.1 5.67t-2.5 7.42q-.7 3.01-1.63 4.06-.93 1.06-2.91 1.06zm32.45 0q-3.97 0-6.34-2.88-2.37-2.88-2.37-7.55 0-5.12 2.37-9.7 2.37-4.57 6.31-7.36 3.93-2.78 8.35-2.78 1.41 0 1.89.54.48.55.8 1.95 1.34-.25 2.81-.25 3.14 0 3.14 2.24 0 1.34-.96 6.4-1.47 7.36-1.47 10.24 0 .96.48 1.53.48.58 1.24.58 1.22 0 2.95-1.57 1.73-1.57 4.67-5.09.77-.89 1.73-.89.83 0 1.31.77.48.76.48 2.11 0 2.56-1.22 3.97-2.62 3.26-5.56 5.5-2.95 2.24-5.7 2.24-2.11 0-3.87-1.44-1.76-1.44-2.66-3.94-3.33 5.38-8.38 5.38zm2.3-6.46q1.41 0 2.69-1.67 1.28-1.66 1.86-4.41L161.02-24q-2.68.06-4.96 2.02-2.27 1.95-3.61 5.15-1.35 3.2-1.35 6.78 0 1.99.8 2.95.8.96 2.21.96zM178.56.32q-2.43 0-3.42-2.56-1-2.56-1-8.19 0-8.32 2.37-15.81.58-1.86 1.89-2.72 1.31-.86 3.68-.86 1.28 0 1.79.32t.51 1.21q0 1.03-.96 4.61-.64 2.56-1.02 4.45-.38 1.89-.64 4.7 1.73-4.99 4.13-8.45 2.4-3.45 4.93-5.15 2.52-1.69 4.76-1.69 2.24 0 3.17 1.02.93 1.02.93 3.14 0 2.04-1.22 7.42-.51 2.3-.7 3.46 3.2-7.88 7.1-11.46 3.91-3.58 7.3-3.58 4.16 0 4.16 4.16 0 2.49-1.41 9.02-1.21 5.57-1.21 7.36 0 2.56 1.85 2.56 1.28 0 3.04-1.57t4.71-5.09q.76-.89 1.72-.89.84 0 1.32.77.48.76.48 2.11 0 2.56-1.22 3.97-2.75 3.39-5.92 5.56-3.17 2.18-7.2 2.18-3.26 0-4.93-1.89-1.66-1.89-1.66-5.47 0-1.79.89-6.4.84-4.03.84-5.57 0-1.02-.71-1.02-.83 0-2.37 2.14-1.53 2.15-3.07 5.67-1.53 3.52-2.49 7.42-.71 3.07-1.64 4.1-.92 1.02-2.97 1.02-2.11 0-3.17-2.02-1.06-2.01-1.06-4.89 0-2.43.64-7.04.52-4.1.52-5.38 0-1.02-.71-1.02-.96 0-2.43 2.3-1.47 2.31-2.85 5.89-1.37 3.58-2.21 7.04-.7 3.01-1.63 4.06-.93 1.06-2.91 1.06z'
        transform='translate(81 57)'
      />
    </svg>
  </Picture>
)