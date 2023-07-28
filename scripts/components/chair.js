import {STATUSES, SVG} from '../utils.js';

export default function Chair(row, number, status = STATUSES.FREE){
    this.row = row;
    this.number = number;
    this.status = status;

    this.elements = {
        self: document.createElement("figure"),
    };

    this.render = (parent) => {
        this.elements.self.classList.add("cinema__seats__seat");
        this.elements.self.classList.add(`cinema__seats__seat--${this.status}`);
        this.elements.self.insertAdjacentHTML("afterbegin", SVG);
        parent.append(this.elements.self);
    }
    this.changeStatus = (newStatus) => {
        if(this.status != newStatus){
            this.elements.self.classList.remove(`cinema__seats__seat--${this.status}`);
            this.status = newStatus;
            this.elements.self.classList.add(`cinema__seats__seat--${this.status}`);
        }
    }
}