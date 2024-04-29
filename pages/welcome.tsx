import React from 'react'
import { Montserrat } from "next/font/google";
import styles from './Welcome.module.css'
import Head from 'next/head';

const montserrat = Montserrat({ subsets: ["latin"] }); //This sets our font variable from Google Fonts

const Welcome = () => {
  // Here I will implement javascript date logic to fetch the current date and time
  const dateObject:Date = new Date(); //This gives us the current date in form of an object that includes the time, and time zone as well, with type safety
  const dateString:string = dateObject.toLocaleDateString() //this method simplifies the date object to a string containing the date in a DD/MM/YYYY format with type safety
  return (
    <>
    <Head>
      <title>Welcome Page</title> {/* I imported the Head component so I can set a title for this specific page*/}
    </Head>
    <section className={`${montserrat.className} ${styles.welcome__container}`}> {/*montserrat.className applies the font to the whole body*/}
      <h1 className={styles.welcome__heading}>&lt;p&gt;Welcome to Next.js with TypeScript!&lt;/p&gt;</h1>
      <span className={styles.welcome__date}>Today's Date: {dateString}</span>
    </section>
    </>
  )
}

export default Welcome