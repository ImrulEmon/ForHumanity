import React from 'react';
import './Accordion.css';

const Accordion = () => {
    return (
        <div class="accordion">
    <div class="accordion__block-title">
      Frequenty Asked Questions :
    </div>
    <label class="accordion__item">
      <input type="radio" name="accordion" checked/>
      <div class="accordion__title">FAQ 1</div>
      <div class="accordion__content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore incidunt odio possimus excepturi ipsa, aliquid maiores harum tempora sunt soluta nam culpa qui atque? Soluta sed nobis necessitatibus beatae exercitationem.</div>
    </label>
    <label class="accordion__item">
      <input type="radio" name="accordion"/>
      <div class="accordion__title">FAQ 2</div>
      <div class="accordion__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate, molestiae consequuntur eveniet quisquam dolor ea accusantium laudantium quo quos blanditiis maxime doloremque atque. Neque ut odio sunt quam odit?</div>
    </label>
    <label class="accordion__item">
      <input type="radio" name="accordion"/>
      <div class="accordion__title">FAQ 3</div>
      <div class="accordion__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum culpa voluptatibus maiores odio nemo adipisci id dolore, velit beatae eveniet. Pariatur reiciendis quae, exercitationem tempora autem accusamus optio iusto!</div>
    </label>
  </div>
    );
};

export default Accordion;