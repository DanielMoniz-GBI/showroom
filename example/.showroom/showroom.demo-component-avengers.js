export default {
  section: 'Slim.js',
  alias: 'slim.js component',
  descriptionURL: false, //'https://google.com',
  description: `
# Demo Component

### Usage
\`\`\`html
<demo-component-avengers accent-color="darkred" text-color="white"></demo-component-avengers>
\`\`\`
\`\`\`javascript
component.data = {
  rank: 95,
  lastAssignment: 'Save captain Fury'
} // will trigger *datachanged* event

component.mission = 'Save the world' // will trigger *taskselected* event
\`\`\`

### Attributes
- **accent-color** Accent color of the component
- **text-color** Color of text

### Properties
- {object} data
- {string} title
- {Array<string>} members
- {string} mission

### Events
- missionstarted
- datachanged
- taskselected
  `,

  component: 'demo-component-avengers',

  path: '/demo-component-avengers.js',

  events: ['missionstarted', 'datachanged', 'taskselected'],
  properties: {
    title: 'Avengers',
    members: [
      'Captain America', 'Ironman', 'Hawkeye'
    ],
    mission: new Set(['Protect New York', 'Save the world', 'Shut down Hydra']),
    data: {
      rank: 95,
      lastMission: 'Save captain Fury'
    }
  },
  attributes: {
    'accent-color': 'darkred',
    'text-color': 'white',
  },
  outerHTML: /*html*/`

    <div style="padding: 1rem; width: 100%; max-width: 450px; justify-self: center;">
      <demo-component-avengers>
        <img width="64" height="64" src="/avengers.png">
      </demo-component-avengers>
    </div>
    `
}