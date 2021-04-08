import React from 'react'
import styles from './Statistics.module.css'

export default function Statistics({title, stats}) {
    return (
        <section className={styles.statistics}>
        <h2 className={styles.title}>{title}</h2>
      
        <ul className={styles.list}>
          <li className={styles.item1}>
    <span className={styles.label1}>{stats[0].label}</span>
    <span className={styles.percentage1}>{stats[0].percentage}%</span>
          </li>
          <li className={styles.item2}>
            <span className={styles.label2}>{stats[1].label}</span>
            <span className={styles.percentage2}>{stats[1].percentage}%</span>
          </li>
          <li className={styles.item3}>
            <span className={styles.label3}>{stats[2].label}</span>
            <span className={styles.percentage3}>{stats[2].percentage}%</span>
          </li>
          <li className={styles.item4}>
            <span className={styles.label4}>{stats[3].label}</span>
            <span className={styles.percentage4}>{stats[3].percentage}%</span>
          </li>
        </ul>
      </section>
    )
}