import numpy as np
import tensorflow as tf
from tensorflow.keras.layers import Flatten, Dense
from tensorflow.keras.models import Sequential

lite_model = Sequential([
    Flatten(input_shape=(250, 250, 3)),
    Dense(128, activation='relu'),
    Dense(64, activation='relu'),
    Dense(2)
])

lite_model.load_weights('prediction_model/weights/lite_model_weights.h5')

# PIL Image input
def lite_predict(image):
    img = image.resize((250, 250)).convert('RGB')
    img_arr = np.array(img).astype('float32')
    img_arr = (img_arr / 255.0 - 0.5) / 0.5
    img_arr = np.expand_dims(img_arr, axis=0)
    prediction = lite_model.predict(img_arr)
    result = np.argmax(tf.nn.softmax(prediction[0]).numpy())
    if result == 0:
        return 'Fire'
    return 'No Fire'