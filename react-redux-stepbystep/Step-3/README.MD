Working with state and immutability

Now, in the previous example ,w e have seen how redux works.

But in our real applications, we hardly deal with the numbers and strings but we will deal with the arrays and objects which are immutable, primitives and gets copied means one place of memory and pointer will be pointing the position.

So, thats why we have to be careful that we take the old state ,we make copy of it and we generate new state on old state copy basis and then we leave old state untouched



eventhought we see result herre, but when we expand we see older values. The reason is we are not doing it in immutable way. So, we are simply taking the old property and change the value. So, we are still pointing to the old position of that state.

Why is this immutable way badder?
 because we got no way of getting back to old state. we can see how our state changes thougout the application.state is always complicated it is always difficult to know the current state of the application at any given place of the application.

with that we got immutable way f using js objects passed in state and now we also have last values array
