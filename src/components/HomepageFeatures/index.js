import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What is YWAM Sendai?',
    address: '/docs/about/ywamsendai',
    description: (
      <>
        Everything you need to know about YWAM Sendai and YWAM international.
      </>
    ),
  },
  {
    title: 'Community',
    address: '/docs/community/communication',
    description: (
      <>
        All you need to know about being a part of the YWAM Sendai community.
      </>
    ),
  },
  {
    title: 'Life in Japan',
    address: '/docs/lifeinjapan/gettingsettled',
    description: (
      <>
        Some helpful tips and advice on life in Japan.
      </>
    ),
  },
  {
    title: 'DTS',
    address: '/docs/dts/faq',
    description: (
      <>
        All you need to know about DTS in Sendai--for both students and staff!
      </>
    ),
  },
];

function Feature({title, address, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>
          <Link className={styles.formatLink} to={(address)}>
            {title}
          </Link>
        </h3>
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
