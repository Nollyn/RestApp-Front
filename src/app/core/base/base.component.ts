import {AppInjector} from './app.Injector';
import {ToastrService} from 'ngx-toastr';

export class BaseComponent {
  /**
   * Toast notifications service
   * */
  protected toastR: ToastrService;

  /**
   *
   */
  constructor() {
    const injector = AppInjector.getInjector();
    this.toastR = injector.get(ToastrService);
  }

  /**
   * Launch success message
   * */
  success(message?: string) {
    this.toastR.success(message ?? 'Operation completed successfully');
  }

  /**
   * Launch warning message
   * */
  warning(message: string) {
    this.toastR.warning(message);
  }

  /**
   * Launch error message
   * */
  error(message?: string) {
    this.toastR.error(message ?? 'An error has occurred, please try again late');
  }

  /**
   * Launch info message
   * */
  info(message: string) {
    this.toastR.info(message);
  }
}
