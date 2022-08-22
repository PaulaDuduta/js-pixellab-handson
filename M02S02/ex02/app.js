// jQuerys DOMContentLoaded:
// $(document).ready(function()) do not use this
//^ varianta asta e veche si deprecated
//use this instead:

//data model/ data set / application state
const person = {};
//arrow functions -> no hoisting
const renderSkillsUl = (skillName) => {
  const className = 'skillsUl';
  let $skillsUl = $('.' + className);

  if ($skillsUl.length <= 0) {
    $skillsUl = $('<ul>', {
      class: className,
    });
  }

  const $skillLi = $('<li>', {
    text: skillName,
  });
  const $skillInput = $('<input>', {
    type: 'text',
    value: skillName,
    name: `skill-${skillName.replaceAll(' ', '')}`,
  });
  $skillLi.append($skillInput);

  $skillsUl.append($skillLi);

  return $skillsUl;
};

$(function () {
  //form submission step
  const $form = $('#personForm').on('submit', function () {
    event.preventDefault();
    //this -> pointer to the form
    //this.name -> pointer to the input
    person.name = this.name.value;
    person.surname = this.surname.value;
    person.age = this.age.value;
    person.skills = person.skills || [];

    //loop through optional data
    const formData = new FormData(this);
    for (const entry of formData) {
      // console.log(entry);
      //array destructure
      const [inputName, inputValue] = entry;
      // const inputName = entry[0];
      // const inputValue = entry[1];
      if (inputName.startsWith('skill_')) {
        person.skills.push(inputValue);
      }
    }

    this.reset();
    $('.skillsUl').remove();

    //wrap form in jQuery
    //render returneaza obiect jQ si este plasat in DOM
    $(this).after(render(person));
  });

  //create skills input step
  //form.descendenti-directii.al-doilea-fieldset
  // $form.children('fieldset:nth-child(2)') //v1
  const addSkillText = 'Add Skill';
  $form
    .children()
    .eq(1)
    .append(
      $('<input>', {
        type: 'text',
        placeholder: 'Skill',
        name: 'skillInput',
      }),
    )
    .append(
      $('<button>', {
        type: 'button',
        title: addSkillText,
        class: 'addSkillButton',
        text: addSkillText,
      }).on('click', function () {
        //in function functions, this -> button.addSkillButton
        const $button = $(this);
        const $skillInput = $button.prev();
        const skillName = $skillInput.val();

        const $ul = renderSkillsUl(skillName);
        $button.after($ul);

        $skillInput.val('');
      }),
    );

  //hoisting function functions
  function render(person) {
    //all in memory
    const $personDisplay = $('<div>', {
      class: 'personDisplay',
    })
      .append(renderPerson(person))
      .append(renderPersonSkills(person));

    return $personDisplay;
  }

  function renderPerson(person) {
    //destructurare
    const { name, age, surname } = person;
    // const name = person.name;
    // const age = person.age;
    // const surname = person.surname;

    return $('<p>', {
      text: `${name} ${surname}: ${age}`,
    });
  }

  function renderPersonSkills(person) {
    const { skills, ...restOfPerson } = person;
    const { name } = restOfPerson;

    let message = '';
    skills.forEach(function (skill, index, skills) {
      let punctuation = ',';

      if (index === skills.length - 1) {
        punctuation = '.';
      }

      if (index === skills.length - 2) {
        punctuation = ' and ';
      }

      message += `${skill}${punctuation}`;
    });

    return $('<p>', {
      text: `${name}'s skills are: ${message}`,
    });
  }
});
