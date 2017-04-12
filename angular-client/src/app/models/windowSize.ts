import {Injectable} from '@angular/core';

@Injectable()
export class WindowSize {
    private width: number;
    private height: number;
    
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    
    getWidth(): number {
        return this.width;
    }
    
    getHeight(): number {
        return this.height;
    }
}