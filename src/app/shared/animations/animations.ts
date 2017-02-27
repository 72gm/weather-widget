import { trigger, state, style, transition, animate, keyframes} from '@angular/core';

// export const pageTransition =
//     trigger('transition', [
//         state('in', style({ transform: 'translateY(0)', opacity: '0'})),
//         transition('void => *', [
//             style({transform: 'translateY(-150px)', opacity: '1'}),
//             animate('500ms ease-out')
//         ])
//     ]);

    export const pageTransition =
    trigger('transition', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      animate(1000, keyframes([
        style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      ]))
    ]),
    transition('* => void', [
      animate(1000, keyframes([
        style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
        style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
        style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
      ]))
    ])
  ])

export const visibilityChange =
    trigger('visibilityChange', [
        state('shown' , style({ height: 'auto',  opacity: 1 })), 
        state('hidden', style({ opacity: 0, height: '0' })),
        transition('* => *', animate('750ms ease-in'))
  ]);

