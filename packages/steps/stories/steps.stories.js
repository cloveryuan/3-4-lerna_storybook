import MyySteps from '../'

export default {
  title: 'MyySteps',
  component: MyySteps
}

export const Steps = _ => ({
  components: { MyySteps },
  template: `
    <div>
      <myy-steps></myy-steps>
    </div>
  `
})