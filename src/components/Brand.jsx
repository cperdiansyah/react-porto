import React from 'react';
import Button from 'elements/Button';

export default function Brand(props) {
  const className = [props.className];
  const href = props.href || '/';
  return (
    <Button className={'' + className.join(' ')} href={href} type='link'>
      <span>Chandra Perdiansyah</span>
    </Button>
  );
}
