import React from 'react';
import './Accordion.css';

const Accordion = () => {
    return (
        <div className="accordion">
    <div className="accordion__block-title">
      Frequenty Asked Questions :
    </div>
    <label className="accordion__item">
      <input type="radio" name="accordion" checked/>
      <div className="accordion__title">FAQ 1</div>
      <div className="accordion__content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore incidunt odio possimus excepturi ipsa, aliquid maiores harum tempora sunt soluta nam culpa qui atque? Soluta sed nobis necessitatibus beatae exercitationem.</div>
    </label>
    <label className="accordion__item">
      <input type="radio" name="accordion"/>
      <div className="accordion__title">FAQ 2</div>
      <div className="accordion__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate, molestiae consequuntur eveniet quisquam dolor ea accusantium laudantium quo quos blanditiis maxime doloremque atque. Neque ut odio sunt quam odit?</div>
    </label>
    <label className="accordion__item">
      <input type="radio" name="accordion"/>
      <div className="accordion__title">FAQ 3</div>
      <div className="accordion__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum culpa voluptatibus maiores odio nemo adipisci id dolore, velit beatae eveniet. Pariatur reiciendis quae, exercitationem tempora autem accusamus optio iusto!</div>
    </label>
  </div>
    );
};

export default Accordion;