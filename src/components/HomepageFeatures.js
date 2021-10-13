import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Tokens',
    image: '../../static/img/gs-tokens.png',
    description: (
      <>
        Create local ERC-20 currency, denote ownership, kick-start projects.
      </>
    ),
  },
  {
    title: 'Decentralized Apps',
    image: '../../static/img/gs-dapps.png',
    description: (
      <>
        Build dApps that can communicate with any internet connected API.
      </>
    ),
  },
  {
    title: 'Games',
    image: '../../static/img/gs-game.png',
    description: (
      <>
        Non-fungible ERC-721 tokens, manage membership, track items.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} alt={title} /> */}
        <img src={image} alt="Logo" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
