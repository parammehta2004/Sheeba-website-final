"use client";
import React, { useState } from 'react';
import styles from './DisplayCards.module.css';

export default function DisplayCards({ cards }) {
  return (
    <div className={styles.gridContainer}>
      {cards.map((card, index) => {
        return (
          <div
            key={index}
            className={styles.skewCard}
          >
            <div className={styles.cardHeader}>
              <span className={styles.iconWrapper}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className={styles.title}>{card.title}</p>
            </div>
            <p className={styles.description}>{card.description || card.text}</p>
          </div>
        );
      })}
    </div>
  );
}
