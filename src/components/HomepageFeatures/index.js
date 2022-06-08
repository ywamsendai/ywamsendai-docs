import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What is YWAM Japan?',
    address: 'about/ywam',
    description: (
      <>
        Everything you need to know about how we do things at YWAM Japan. If you're a new staff, start here!
      </>
    ),
  },
  {
    title: 'Staff',
    address: 'staff/communication',
    description: (
      <>
        All you need to know about the different ministries we do in Japan.
      </>
    ),
  },
  {
    title: 'Operations',
    address: 'operations/visaApply',
    description: (
      <>
        All you need to know about how to function as a YWAM location in Japan, as well as info related to our legal entity.
      </>
    ),
  },
];

function Feature({title, address, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Link className={styles.formatLink} to={(address)}><h3>{title}</Link></h3>
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
