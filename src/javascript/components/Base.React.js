/**
 * Created by mikhail on 01.07.15.
 */
import React, {Component} from 'react';
import reactMixin from 'react-mixin';

import AutoBind from '../mixins/AutoBind.js';

@reactMixin.decorate(AutoBind)
class Base extends Component {}

export default Base;