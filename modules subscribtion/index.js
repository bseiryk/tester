class A {
  evt = new Evt();
}
class B {
  evt = new Evt();

  constructor(incomingInstance) {
    incomingInstance.evt.subscribe(() => {
      this.evt.dispatch();
    });
  }
}
class C {
  evt = new Evt();

  constructor(incomingInstance) {
    incomingInstance.evt.subscribe(() => {
      this.evt.dispatch();
    });
  }
}
class D {
  evt = new Evt();

  constructor(incomingInstance) {
    incomingInstance.evt.subscribe(() => {
      this.evt.dispatch();
    });
  }
}
const a = new A();
const b = new B(a);
const c = new C(b);
const d = new D(c);

A.evt.dispatch();

// idea of approach (Contacts and Sms)
// module A and B can work alone or together. if together module B depends on A
// therefore they can be injected in different areas of app and when A react then B listen and will react to

// better approach to crate Composition via adapters or without adapters

// code base
// onboarding approach
// windows and microsoft app
// debag approach for web view 1

// flat file structure
// a lot of abstractions and DI
// a lot of async stuff
// the only way to debug is to use logs(debug) which are everywhere
