# Mac Fix Home & End Keys

1. Navigate to `~/Library` and creat a new folder called `KeyBindings`.
2. Navigate into the `~/Library/KeyBindings` folder and create a new file called `DefaultKeyBinding.dict`.
3. Add the following commands to that file:

   ```txt
   {
   /* Remap Home / End keys */
   /* Home Button*/
   "\UF729" = "moveToBeginningOfLine:";
   /* End Button */
   "\UF72B" = "moveToEndOfLine:";
   /* Shift + Home Button */
   "$\UF729" = "moveToBeginningOfLineAndModifySelection:";
   /* Shift + End Button */
   "$\UF72B" = "moveToEndOfLineAndModifySelection:";
   /* Ctrl + Home Button */
   "^\UF729" = "moveToBeginningOfDocument:";
   /* Ctrl + End Button */
   "^\UF72B" = "moveToEndOfDocument:";
    /* Shift + Ctrl + Home Button */
   "$^\UF729" = "moveToBeginningOfDocumentAndModifySelection:";
   /* Shift + Ctrl + End Button*/
   "$^\UF72B" = "moveToEndOfDocumentAndModifySelection:";
   }
   ```

4. Save the file and restart your mac. The home and end keys should now work as expected.
