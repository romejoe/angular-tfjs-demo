import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    template:  `
      <h1>About the Demo</h1>

      <section>
        <p>
          This demo is developed using <a href="https://angular.io">Angular</a> and
          <a href="https://www.tensorflow.org/js">TensorFlow.js</a>.
        </p>

        <p>
          The project is using the
          <a href="https://github.com/tensorflow/tfjs-models/tree/master/handpose"
          >handpose</a
          >
          model to recognize hands and their features. After that, we pass the output
          to
          <a href="https://github.com/andypotato/fingerpose">fingerpose</a> which
          estimates the hand sign. Once we recognize an action, we emit it via a
          BehaviorSubject. A component, subscribed to the BehaviorSubject processes
          the user action.
        </p>
      </section>

    `,
    styles: `
      a {
        color: rgb(129, 183, 255);
        text-decoration: none;
      }

      a:hover {
        color: #fff;
        text-decoration: underline;
      }

      section {
        max-width: 400px;
        display: block;
      }

    `
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
