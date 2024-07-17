solutions
1.12 to 1.14

Array(anecdotes.length) creates a new array with a length equal to the number of anecdotes.

.fill(0) initializes all elements of this new array to 0.

```bash
const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
```


anecdotes.length gives the total number of anecdotes in your array.

Multiplying the result of Math.random() by anecdotes.length scales the random number to be between 0 (inclusive) and anecdotes.length (exclusive).

For instance, if there are 8 anecdotes, Math.random() * 8 might produce a value like 4.296.

```bash
setSelected(Math.floor(Math.random() * anecdotes.length));
```

Math.max(...points):

Math.max is a function that returns the largest of zero or more numbers.

points.indexOf(...):

indexOf is a method that returns the first index at which a given element can be found in the array, or -1 if it is not present.

```bash
<p>{anecdotes[points.indexOf(Math.max(...points))]}</p>

```
