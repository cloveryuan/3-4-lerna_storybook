import MyyFormitem from '../'

export default {
  title: 'MyyFormitem',
  component: MyyFormitem
}

export const Formitem = _ => ({
  components: { MyyFormitem },
  template: `
    <div>
      <myy-formitem></myy-formitem>
    </div>
  `
})