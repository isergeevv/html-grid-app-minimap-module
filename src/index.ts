import { GridApp, GridAppModule } from '@isergeevv/html-grid-app-base';
import type { GridAppMiniMapModuleConfiguration } from './types';

export class GridAppMiniMap extends GridAppModule {
  constructor(app: GridApp, config: GridAppMiniMapModuleConfiguration) {
    super(app, config);

    this.element.style.setProperty('--gridapp-minimap-bg-color', config.backgroundColor.join(', '));
  }

  onMouseDown(_e: MouseEvent): void {}

  onMouseMove(_e: MouseEvent): void {}

  onMouseUp(_e: MouseEvent): void {}

  onClick(_e: MouseEvent): void {}

  onWheelMove(_e: WheelEvent): void {}

  onKeyDown(_e: KeyboardEvent): void {}

  onKeyUp(_e: KeyboardEvent): void {}

  onContextMenu(_e: KeyboardEvent): void {}

  import(_data: object): void {}

  export(): object {
    return {};
  }
}
