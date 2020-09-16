import { Component,Vue } from 'vue-property-decorator'
@Component
class ProjectMixin extends Vue {
    public projName: string = '小胖墩'
    public setProjectName(newVal: string): void {
      this.projName = newVal
    }
  }
export default ProjectMixin